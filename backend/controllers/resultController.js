import Result from "../models/resultModels.js";

// CREATE RESULT
export async function createResult(req, res) {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    const { title, technology, level, totalQuestions, correct, wrong } =
      req.body;

    if (
      !title ||
      !technology ||
      !level ||
      totalQuestions === undefined ||
      correct === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const total = Number(totalQuestions);
    const correctAnswers = Number(correct);

    const wrongAnswers =
      wrong !== undefined ? Number(wrong) : Math.max(0, total - correctAnswers);

    const result = await Result.create({
      user: req.user._id,
      title: String(title).trim(),
      technology,
      level,
      totalQuestions: total,
      correct: correctAnswers,
      wrong: wrongAnswers,
    });

    return res.status(201).json({
      success: true,
      message: "Result created successfully",
      result,
    });
  } catch (error) {
    console.error("CREATE RESULT ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
}

// GET USER RESULTS
export async function listResults(req, res) {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    const { technology } = req.query;

    const query = {
      user: req.user._id,
    };

    if (technology && technology.toLowerCase() !== "all") {
      query.technology = technology.toLowerCase();
    }

    const results = await Result.find(query).sort({ createdAt: -1 }).lean();

    return res.status(200).json({
      success: true,
      results,
    });
  } catch (error) {
    console.error("LIST RESULTS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
}
