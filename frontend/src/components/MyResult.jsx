import React, { useEffect, useState, useCallback, useMemo } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import { resultStyles } from "../assets/dummyStyle";

// ===============================
// PERFORMANCE BADGE
// ===============================

const Badge = ({ percent }) => {
  if (percent >= 85) {
    return <span className={resultStyles.badgeExcellent}>Excellent</span>;
  }

  if (percent >= 65) {
    return <span className={resultStyles.badgeGood}>Good</span>;
  }

  if (percent >= 45) {
    return <span className={resultStyles.badgeAverage}>Average</span>;
  }

  return <span className={resultStyles.badgeNeedsWork}>Needs Work</span>;
};

// ===============================
// MAIN COMPONENT
// ===============================

const MyResult = ({ apiBase = "http://localhost:4000" }) => {
  const [results, setResults] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [selectedTechnology, setSelectedTechnology] = useState("all");

  const [technologies, setTechnologies] = useState([]);

  // ===============================
  // AUTH HEADER
  // ===============================

  const getAuthHeader = useCallback(() => {
    const token = localStorage.getItem("token");

    return token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};
  }, []);

  // ===============================
  // FETCH RESULTS
  // ===============================

  useEffect(() => {
    let mounted = true;

    const fetchResults = async (tech = "all") => {
      setLoading(true);

      setError(null);

      try {
        const query =
          tech && tech.toLowerCase() !== "all"
            ? `?technology=${encodeURIComponent(tech)}`
            : "";

        const response = await axios.get(`${apiBase}/api/results${query}`, {
          headers: {
            "Content-Type": "application/json",

            ...getAuthHeader(),
          },

          timeout: 10000,
        });

        if (!mounted) {
          return;
        }

        if (response.status === 200 && response.data && response.data.success) {
          setResults(
            Array.isArray(response.data.results) ? response.data.results : [],
          );
        } else {
          setResults([]);

          toast.warn("Unexpected server response while fetching results.");
        }
      } catch (err) {
        console.error(
          "Failed to fetch results:",
          err?.response?.data || err.message || err,
        );

        if (!mounted) {
          return;
        }

        if (err?.response?.status === 401) {
          setError("Not authenticated. Please log in to view results.");

          toast.error("Not authenticated. Please login.");
        } else {
          setError("Could not load results from server.");

          toast.error("Could not load results from server.");

          setResults([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchResults(selectedTechnology);

    return () => {
      mounted = false;
    };
  }, [apiBase, selectedTechnology, getAuthHeader]);

  // ===============================
  // FETCH TECHNOLOGY LIST
  // ===============================

  useEffect(() => {
    let mounted = true;

    const fetchAllForTechList = async () => {
      try {
        const response = await axios.get(`${apiBase}/api/results`, {
          headers: {
            "Content-Type": "application/json",

            ...getAuthHeader(),
          },

          timeout: 10000,
        });

        if (!mounted) {
          return;
        }

        if (response.status === 200 && response.data && response.data.success) {
          const all = Array.isArray(response.data.results)
            ? response.data.results
            : [];

          const technologySet = new Set();

          all.forEach((result) => {
            if (result.technology) {
              technologySet.add(result.technology);
            }
          });

          const technologyArray = Array.from(technologySet).sort((a, b) =>
            a.localeCompare(b),
          );

          setTechnologies(technologyArray);
        }
      } catch (err) {
        console.error(
          "Failed to fetch technologies:",
          err?.response?.data || err.message || err,
        );
      }
    };

    fetchAllForTechList();

    return () => {
      mounted = false;
    };
  }, [apiBase, getAuthHeader]);

  // ===============================
  // SUMMARY
  // ===============================

  const summary = useMemo(() => {
    const source = Array.isArray(results) ? results : [];

    const totalQuestions = source.reduce(
      (sum, result) => sum + (Number(result.totalQuestions) || 0),
      0,
    );

    const totalCorrect = source.reduce(
      (sum, result) => sum + (Number(result.correct) || 0),
      0,
    );

    const totalWrong = source.reduce(
      (sum, result) => sum + (Number(result.wrong) || 0),
      0,
    );

    const percentage = totalQuestions
      ? Math.round((totalCorrect / totalQuestions) * 100)
      : 0;

    return {
      totalQuestions,
      totalCorrect,
      totalWrong,
      percentage,
    };
  }, [results]);

  // ===============================
  // GROUP RESULTS
  // ===============================

  const grouped = useMemo(() => {
    const source = Array.isArray(results) ? results : [];

    const map = {};

    source.forEach((result) => {
      const track = (result.title || "").split(" ")[0] || "General";

      if (!map[track]) {
        map[track] = [];
      }

      map[track].push(result);
    });

    return map;
  }, [results]);

  // ===============================
  // FILTER
  // ===============================

  const handleSelectTechnology = (technology) => {
    setSelectedTechnology(technology || "all");
  };

  // ===============================
  // RESULT KEY
  // ===============================

  const makeKey = (result) => {
    if (result?._id) {
      return result._id;
    }

    return `${result?.id || ""}||${result?.title || ""}`;
  };

  // ===============================
  // UI
  // ===============================

  return (
    <div className={resultStyles.pageContainer}>
      <div className={resultStyles.container}>
        {/* HEADER */}

        <header className={resultStyles.header}>
          <div>
            <h1 className={resultStyles.title}>Quiz Results</h1>
          </div>

          <div className={resultStyles.headerControls} />
        </header>

        {/* FILTER */}

        <div className={resultStyles.filterContainer}>
          <div className={resultStyles.filterContent}>
            <div className={resultStyles.filterButtons}>
              <span className={resultStyles.filterLabel}>
                Filter by Technology:
              </span>

              {/* ALL */}

              <button
                type="button"
                onClick={() => handleSelectTechnology("all")}
                className={`${resultStyles.filterButton} ${
                  selectedTechnology === "all"
                    ? resultStyles.filterButtonActive
                    : resultStyles.filterButtonInactive
                }`}
              >
                All
              </button>

              {/* TECHNOLOGIES */}

              {technologies.map((technology) => (
                <button
                  key={technology}
                  type="button"
                  onClick={() => handleSelectTechnology(technology)}
                  className={`${resultStyles.filterButton} ${
                    selectedTechnology === technology
                      ? resultStyles.filterButtonActive
                      : resultStyles.filterButtonInactive
                  }`}
                >
                  {technology}
                </button>
              ))}
            </div>

            <div className={resultStyles.filterStatus}>
              {selectedTechnology === "all"
                ? "Showing results for all technologies"
                : `Filtering: ${selectedTechnology}`}
            </div>
          </div>
        </div>

        {/* LOADING */}

        {loading ? (
          <div className={resultStyles.loadingContainer}>
            <div className={resultStyles.loadingSpinner} />

            <div className={resultStyles.loadingText}>Loading results...</div>
          </div>
        ) : error ? (
          <div className={resultStyles.emptyState}>{error}</div>
        ) : (
          <>
            {/* RESULT GROUPS */}

            {Object.entries(grouped).map(([track, items]) => (
              <section key={track} className={resultStyles.trackSection}>
                <h2 className={resultStyles.trackTitle}>{track} Track</h2>

                <div className={resultStyles.resultsGrid}>
                  {items.map((result) => (
                    <StripCard key={makeKey(result)} item={result} />
                  ))}
                </div>
              </section>
            ))}

            {/* EMPTY */}

            {Array.isArray(results) && results.length === 0 && (
              <div className={resultStyles.emptyState}>
                No results yet. Take a quiz to see results here!
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// ===============================
// RESULT CARD
// ===============================

function StripCard({ item }) {
  const percent = item.totalQuestions
    ? Math.round((Number(item.correct) / Number(item.totalQuestions)) * 100)
    : 0;

  const getLevel = (result) => {
    const id = (result.id || "").toString().toLowerCase();

    const title = (result.title || "").toString().toLowerCase();

    const level = (result.level || "").toString().toLowerCase();

    if (id.includes("basic") || title.includes(" basic") || level === "basic") {
      return {
        letter: "B",
        style: resultStyles.levelBasic,
      };
    }

    if (
      id.includes("intermediate") ||
      title.includes(" intermediate") ||
      level === "intermediate"
    ) {
      return {
        letter: "I",
        style: resultStyles.levelIntermediate,
      };
    }

    return {
      letter: "A",
      style: resultStyles.levelAdvanced,
    };
  };

  const level = getLevel(item);

  return (
    <article className={resultStyles.card}>
      <div className={resultStyles.cardAccent} />

      <div className={resultStyles.cardContent}>
        <div className={resultStyles.cardHeader}>
          <div className={resultStyles.cardInfo}>
            <div className={`${resultStyles.levelAvatar} ${level.style}`}>
              {level.letter}
            </div>

            <div className={resultStyles.cardText}>
              <h3 className={resultStyles.cardTitle}>{item.title}</h3>

              <p className={resultStyles.cardMeta}>
                {item.technology} • {item.level}
                {item.timeSpent ? ` • ${item.timeSpent}` : ""}
              </p>
            </div>
          </div>

          <div className={resultStyles.cardPerformance}>
            <div className={resultStyles.badgeContainer}>
              <Badge percent={percent} />
            </div>
          </div>
        </div>

        {/* STATS */}

        <div className={resultStyles.cardStats}>
          <div className={resultStyles.statItem}>
            <span>Score</span>{" "}
            <strong className={resultStyles.statNumber}>{percent}%</strong>
          </div>

          <div className={resultStyles.statItem}>
            <span>Correct</span>{" "}
            <strong className={resultStyles.statNumber}>{item.correct}</strong>
          </div>

          <div className={resultStyles.statItem}>
            <span>Wrong</span>{" "}
            <strong className={resultStyles.statNumber}>{item.wrong}</strong>
          </div>
        </div>
      </div>
    </article>
  );
}

export default MyResult;
