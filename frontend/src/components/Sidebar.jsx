import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  X,
  Code2,
  CheckCircle,
  XCircle,
  Circle,
  Play,
  Trophy,
  BookOpen,
  ChevronRight,
  Menu,
} from "lucide-react";

import { toast } from "react-toastify";

import { sidebarStyles } from "../assets/dummyStyle";
import questionsData from "../assets/dummydata";

const API_BASE = "http://localhost:4000";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedTech, setSelectedTech] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [userAnswers, setUserAnswers] = useState([]);

  const [showResults, setShowResults] = useState(false);

  const [score, setScore] = useState({
    correct: 0,
    wrong: 0,
    total: 0,
  });

  const [loading, setLoading] = useState(false);

  const technologies = [
    {
      id: "html",
      name: "HTML",
      color: "text-orange-500",
    },
    {
      id: "css",
      name: "CSS",
      color: "text-blue-500",
    },
    {
      id: "js",
      name: "JavaScript",
      color: "text-yellow-500",
    },
    {
      id: "react",
      name: "React",
      color: "text-cyan-500",
    },
    {
      id: "node",
      name: "Node.js",
      color: "text-green-500",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      color: "text-green-600",
    },
    {
      id: "java",
      name: "Java",
      color: "text-red-500",
    },
    {
      id: "python",
      name: "Python",
      color: "text-blue-600",
    },
    {
      id: "cpp",
      name: "C++",
      color: "text-indigo-500",
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      color: "text-purple-500",
    },
  ];

  const levels = [
    {
      id: "basic",
      name: "Basic",
    },
    {
      id: "intermediate",
      name: "Intermediate",
    },
    {
      id: "advanced",
      name: "Advanced",
    },
  ];

  const getAuthHeader = () => {
    const token = localStorage.getItem("token");

    return token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};
  };

  const questions =
    selectedTech && selectedLevel
      ? questionsData?.[selectedTech]?.[selectedLevel] || []
      : [];

  const selectedTechnology = technologies.find(
    (tech) => tech.id === selectedTech,
  );

  useEffect(() => {
    if (selectedTech && selectedLevel) {
      setCurrentQuestion(0);
      setUserAnswers([]);
      setShowResults(false);

      setScore({
        correct: 0,
        wrong: 0,
        total: questions.length,
      });
    }
  }, [selectedTech, selectedLevel, questions.length]);

  const handleTechnologySelect = (tech) => {
    setSelectedTech(tech);
    setSelectedLevel("");
    setShowResults(false);
    setIsOpen(false);
  };

  const handleLevelSelect = (level) => {
    if (!selectedTech) {
      toast.info("Please select a technology first.");
      return;
    }

    setSelectedLevel(level);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
    setIsOpen(false);
  };

  const handleAnswer = (answer) => {
    if (userAnswers[currentQuestion] !== undefined) {
      return;
    }

    const updatedAnswers = [...userAnswers];

    updatedAnswers[currentQuestion] = answer;

    setUserAnswers(updatedAnswers);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        calculateScore(updatedAnswers);
      }
    }, 500);
  };

  const calculateScore = async (answers) => {
    let correct = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.options[question.correctAnswer]) {
        correct++;
      }
    });

    const wrong = questions.length - correct;

    const finalScore = {
      correct,
      wrong,
      total: questions.length,
    };

    setScore(finalScore);
    setShowResults(true);

    await saveResult(finalScore);
  };

  const saveResult = async (finalScore) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.info("Login to save your quiz result.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        title: `${selectedTech.toUpperCase()} - ${
          selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)
        } quiz`,

        technology: selectedTech,

        level: selectedLevel,

        totalQuestions: finalScore.total,

        correct: finalScore.correct,

        wrong: finalScore.wrong,
      };

      const response = await axios.post(`${API_BASE}/api/results`, payload, {
        headers: getAuthHeader(),
      });

      console.log("Result saved:", response.data);

      toast.success("Quiz result saved successfully!");
    } catch (error) {
      console.error(
        "Error saving result:",
        error.response?.data || error.message,
      );

      if (error.response?.status === 401) {
        toast.error("Session expired. Please login again.");
      } else {
        toast.error(
          error.response?.data?.message || "Failed to save quiz result.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);

    setScore({
      correct: 0,
      wrong: 0,
      total: questions.length,
    });
  };

  const getPerformance = () => {
    if (!score.total) {
      return "Needs Work";
    }

    const percentage = (score.correct / score.total) * 100;

    if (percentage >= 80) {
      return "Excellent";
    }

    if (percentage >= 65) {
      return "Good";
    }

    if (percentage >= 45) {
      return "Average";
    }

    return "Needs Work";
  };

  const getPerformanceClass = () => {
    const performance = getPerformance();

    if (performance === "Excellent") {
      return "bg-[#dcefe3] text-[#39805b]";
    }

    if (performance === "Good") {
      return "bg-[#dff1f7] text-[#26718a]";
    }

    if (performance === "Average") {
      return "bg-[#f7ead0] text-[#92713d]";
    }

    return "bg-[#fff1ef] text-[#a04c43]";
  };

  return (
    <div className={sidebarStyles.pageContainer}>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className={sidebarStyles.mobileOverlay}
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={sidebarStyles.mainContainer}>
        {/* SIDEBAR */}
        <aside
          className={`${sidebarStyles.sidebar} ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          {/* SIDEBAR HEADER */}
          <div className={sidebarStyles.sidebarHeader}>
            <div className={sidebarStyles.headerDecoration1} />

            <div className={sidebarStyles.headerDecoration2} />

            <div className={sidebarStyles.headerContent}>
              <div className={sidebarStyles.logoContainer}>
                <div className={sidebarStyles.logoIcon}>
                  <Code2 size={28} />
                </div>

                <div>
                  <div className={sidebarStyles.logoTitle}>QUIZ APP</div>

                  <div className={sidebarStyles.logoSubtitle}>
                    Test your coding skills
                  </div>
                </div>
              </div>

              <button
                type="button"
                className={sidebarStyles.closeButton}
                onClick={() => setIsOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* SIDEBAR CONTENT */}
          <div className={sidebarStyles.sidebarContent}>
            <div className={sidebarStyles.technologiesHeader}>
              <h2 className={sidebarStyles.technologiesTitle}>Technologies</h2>

              <span className={sidebarStyles.technologiesCount}>
                {technologies.length}
              </span>
            </div>

            {technologies.map((tech) => (
              <div key={tech.id} className={sidebarStyles.techItem}>
                <button
                  type="button"
                  onClick={() => handleTechnologySelect(tech.id)}
                  className={`${sidebarStyles.techButton} ${
                    selectedTech === tech.id
                      ? sidebarStyles.techButtonSelected
                      : sidebarStyles.techButtonNormal
                  }`}
                >
                  <div className={sidebarStyles.techButtonContent}>
                    <div className={`${sidebarStyles.techIcon} ${tech.color}`}>
                      <Code2 size={20} />
                    </div>

                    <span className={sidebarStyles.techName}>{tech.name}</span>
                  </div>

                  <ChevronRight size={18} />
                </button>

                {/* LEVELS */}
                {selectedTech === tech.id && (
                  <div className={sidebarStyles.levelsContainer}>
                    <div className={sidebarStyles.levelsTitle}>
                      <BookOpen size={16} />

                      <span className="ml-2">Select Level</span>

                      <span className={sidebarStyles.techBadge}>
                        {tech.name}
                      </span>
                    </div>

                    {levels.map((level) => {
                      const questionCount =
                        questionsData?.[tech.id]?.[level.id]?.length || 0;

                      return (
                        <button
                          type="button"
                          key={level.id}
                          onClick={() => handleLevelSelect(level.id)}
                          className={`${sidebarStyles.levelButton} ${
                            selectedLevel === level.id
                              ? sidebarStyles.levelButtonSelected
                              : sidebarStyles.levelButtonNormal
                          }`}
                        >
                          <div className={sidebarStyles.levelButtonContent}>
                            <div className={sidebarStyles.levelIcon}>
                              <Play size={14} />
                            </div>

                            <span>{level.name}</span>
                          </div>

                          <span className={sidebarStyles.levelQuestions}>
                            {questionCount} Q
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className={sidebarStyles.sidebarFooter}>
            <div className={sidebarStyles.footerContent}>
              <div className={sidebarStyles.footerContentCenter}>
                <div>Choose a technology and level</div>

                <div className={sidebarStyles.footerHighlight}>
                  Start your quiz 🚀
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className={sidebarStyles.mainContent}>
          {/* MOBILE HEADER */}
          <div className={sidebarStyles.mobileHeader}>
            <button
              type="button"
              className={sidebarStyles.menuButton}
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>

            <div className={sidebarStyles.mobileTitle}>
              {selectedTechnology ? (
                <div className={sidebarStyles.mobileTechInfo}>
                  <div
                    className={`${sidebarStyles.mobileTechIcon} ${selectedTechnology.color}`}
                  >
                    <Code2 size={20} />
                  </div>

                  <div className={sidebarStyles.mobileTechText}>
                    <div className={sidebarStyles.mobileTechName}>
                      {selectedTechnology.name}
                    </div>

                    <div className={sidebarStyles.mobileTechLevel}>
                      {selectedLevel || "Select level"}
                    </div>
                  </div>
                </div>
              ) : (
                <div className={sidebarStyles.mobilePlaceholder}>
                  Select a technology
                </div>
              )}
            </div>
          </div>

          {/* MOBILE LEVELS */}
          {selectedTech && (
            <div className={sidebarStyles.mobileLevels}>
              <div className={sidebarStyles.mobileLevelsContainer}>
                {levels.map((level) => (
                  <button
                    type="button"
                    key={level.id}
                    onClick={() => handleLevelSelect(level.id)}
                    className={sidebarStyles.mobileLevelButton}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* WELCOME SCREEN */}
          {!selectedTech && (
            <div className={sidebarStyles.welcomeContainer}>
              <div className={sidebarStyles.welcomeContent}>
                <div className={sidebarStyles.welcomeIcon}>
                  <Trophy size={38} />
                </div>

                <h1 className={sidebarStyles.welcomeTitle}>
                  Welcome to CodePlay
                </h1>

                <p className={sidebarStyles.welcomeDescription}>
                  Test your programming knowledge with interactive quizzes and
                  improve your coding skills.
                </p>

                <div className={sidebarStyles.featuresGrid}>
                  <div className={sidebarStyles.featureCard}>
                    <div className={sidebarStyles.featureIcon}>
                      <Code2 size={22} />
                    </div>

                    <h3 className={sidebarStyles.featureTitle}>
                      Multiple Technologies
                    </h3>

                    <p className={sidebarStyles.featureDescription}>
                      HTML, CSS, JavaScript, React and more.
                    </p>
                  </div>

                  <div className={sidebarStyles.featureCard}>
                    <div className={sidebarStyles.featureIcon}>
                      <BookOpen size={22} />
                    </div>

                    <h3 className={sidebarStyles.featureTitle}>Three Levels</h3>

                    <p className={sidebarStyles.featureDescription}>
                      Basic, Intermediate and Advanced.
                    </p>
                  </div>

                  <div className={sidebarStyles.featureCard}>
                    <div className={sidebarStyles.featureIcon}>
                      <Trophy size={22} />
                    </div>

                    <h3 className={sidebarStyles.featureTitle}>
                      Track Progress
                    </h3>

                    <p className={sidebarStyles.featureDescription}>
                      Check your quiz performance.
                    </p>
                  </div>
                </div>

                <div className={sidebarStyles.welcomePrompt}>
                  <div className={sidebarStyles.welcomePromptText}>
                    <ChevronRight size={18} />

                    <span className="ml-2">
                      Select a technology from the sidebar to begin
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LEVEL SELECTION */}
          {selectedTech && !selectedLevel && (
            <div className={sidebarStyles.levelSelectionContainer}>
              <div className={sidebarStyles.levelSelectionContent}>
                <div
                  className={`${sidebarStyles.techSelectionIcon} ${
                    selectedTechnology?.color || ""
                  }`}
                >
                  <Code2 size={40} />
                </div>

                <h1 className={sidebarStyles.techSelectionTitle}>
                  {selectedTechnology?.name}
                </h1>

                <p className={sidebarStyles.techSelectionDescription}>
                  Choose a difficulty level to start your quiz.
                </p>

                <div className={sidebarStyles.techSelectionPrompt}>
                  <p className={sidebarStyles.techSelectionPromptText}>
                    Select Basic, Intermediate or Advanced from the sidebar.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* RESULTS */}
          {showResults && (
            <div className={sidebarStyles.resultsContainer}>
              <div className={sidebarStyles.resultsContent}>
                <div className={sidebarStyles.resultsHeader}>
                  <div
                    className={`${sidebarStyles.performanceIcon} ${getPerformanceClass()}`}
                  >
                    <Trophy size={40} />
                  </div>

                  <h1 className={sidebarStyles.resultsTitle}>
                    Quiz Completed!
                  </h1>

                  <p className={sidebarStyles.resultsSubtitle}>
                    {selectedTechnology?.name} - {selectedLevel}
                  </p>

                  <span
                    className={`${sidebarStyles.performanceBadge} ${getPerformanceClass()}`}
                  >
                    {getPerformance()}
                  </span>
                </div>

                <div className={sidebarStyles.scoreGrid}>
                  <div className={sidebarStyles.scoreCard}>
                    <div className={sidebarStyles.scoreIcon}>
                      <CheckCircle size={25} />
                    </div>

                    <div className={sidebarStyles.scoreNumber}>
                      {score.correct}
                    </div>

                    <div className={sidebarStyles.scoreLabel}>Correct</div>
                  </div>

                  <div className={sidebarStyles.scoreCard}>
                    <div className={sidebarStyles.scoreIcon}>
                      <XCircle size={25} />
                    </div>

                    <div className={sidebarStyles.scoreNumber}>
                      {score.wrong}
                    </div>

                    <div className={sidebarStyles.scoreLabel}>Wrong</div>
                  </div>
                </div>

                <div className={sidebarStyles.scoreProgress}>
                  <div className={sidebarStyles.scoreProgressHeader}>
                    <span className={sidebarStyles.scoreProgressTitle}>
                      Score
                    </span>

                    <span className={sidebarStyles.scoreProgressPercentage}>
                      {score.total
                        ? Math.round((score.correct / score.total) * 100)
                        : 0}
                      %
                    </span>
                  </div>

                  <div className={sidebarStyles.scoreProgressBar}>
                    <div
                      className={`${sidebarStyles.scoreProgressFill} ${
                        getPerformance() === "Excellent"
                          ? "bg-[#72a85f]"
                          : getPerformance() === "Good"
                            ? "bg-[#5faebf]"
                            : getPerformance() === "Average"
                              ? "bg-[#d2aa65]"
                              : "bg-[#d16b5f]"
                      }`}
                      style={{
                        width: `${
                          score.total ? (score.correct / score.total) * 100 : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleTryAgain}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#dff1f7] to-[#eaf5e9] text-[#26718a] font-semibold hover:scale-[1.02] transition-transform cursor-pointer"
                  disabled={loading}
                >
                  <Play size={18} />

                  {loading ? "Saving..." : "Try Again"}
                </button>
              </div>
            </div>
          )}

          {/* QUIZ */}
          {selectedTech &&
            selectedLevel &&
            !showResults &&
            questions.length > 0 && (
              <div className={sidebarStyles.quizContainer}>
                <div className={sidebarStyles.quizHeader}>
                  <div className={sidebarStyles.quizTitleContainer}>
                    <h1 className={sidebarStyles.quizTitle}>
                      {selectedTechnology?.name} Quiz
                    </h1>

                    <span className={sidebarStyles.quizCounter}>
                      {currentQuestion + 1} / {questions.length}
                    </span>
                  </div>

                  <div className={sidebarStyles.progressBar}>
                    <div
                      className={sidebarStyles.progressFill}
                      style={{
                        width: `${
                          ((currentQuestion + 1) / questions.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <div className={sidebarStyles.questionContainer}>
                  <div className={sidebarStyles.questionHeader}>
                    <div className={sidebarStyles.questionIcon}>
                      <Circle size={20} />
                    </div>

                    <span className={sidebarStyles.questionText}>
                      {questions[currentQuestion]?.question}
                    </span>
                  </div>

                  <div className={sidebarStyles.optionsContainer}>
                    {questions[currentQuestion]?.options?.map(
                      (option, index) => {
                        const selectedAnswer = userAnswers[currentQuestion];

                        const correctAnswer =
                          questions[currentQuestion]?.options[
                            questions[currentQuestion]?.correctAnswer
                          ];

                        let optionClass = sidebarStyles.optionNormal;

                        if (selectedAnswer !== undefined) {
                          if (option === correctAnswer) {
                            optionClass = sidebarStyles.optionCorrect;
                          } else if (option === selectedAnswer) {
                            optionClass = sidebarStyles.optionIncorrect;
                          }
                        }

                        return (
                          <button
                            type="button"
                            key={index}
                            onClick={() => handleAnswer(option)}
                            disabled={selectedAnswer !== undefined}
                            className={`${sidebarStyles.optionButton} ${optionClass}`}
                          >
                            <div className={sidebarStyles.optionContent}>
                              {selectedAnswer !== undefined &&
                              option === correctAnswer ? (
                                <CheckCircle
                                  className={sidebarStyles.optionIconCorrect}
                                  size={20}
                                />
                              ) : selectedAnswer !== undefined &&
                                option === selectedAnswer ? (
                                <XCircle
                                  className={sidebarStyles.optionIconIncorrect}
                                  size={20}
                                />
                              ) : (
                                <div
                                  className={sidebarStyles.optionIconEmpty}
                                />
                              )}

                              <span className={sidebarStyles.optionText}>
                                {option}
                              </span>
                            </div>
                          </button>
                        );
                      },
                    )}
                  </div>
                </div>
              </div>
            )}

          {/* NO QUESTIONS */}
          {selectedTech &&
            selectedLevel &&
            !showResults &&
            questions.length === 0 && (
              <div className={sidebarStyles.loadingContainer}>
                <div className={sidebarStyles.loadingContent}>
                  <div className={sidebarStyles.loadingSpinner} />

                  <h2 className={sidebarStyles.loadingTitle}>
                    No questions available
                  </h2>

                  <p className={sidebarStyles.loadingDescription}>
                    Questions for this technology and level are not available
                    yet.
                  </p>
                </div>
              </div>
            )}
        </main>
      </div>

      <style>{sidebarStyles.customStyles}</style>
    </div>
  );
};

export default Sidebar;
