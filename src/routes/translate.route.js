const express = require("express");

const { TranslateService } = require("../services/translate.service");

const router = express.Router();

const service = new TranslateService();

router.get("/", res => {
  res.status(200).json({
    message: "Translate api"
  })
})

router.get("/languages", async (req, res, next) => {
  try {
    const response = await service.languages();
    res.status(200).json(response);
  } catch (error) {
    console.log("Algo malo paso");
    next(error);
  }
});

router.post("/translate", async (req, res, next) => {
  const { q, source, target } = req.query;
  try {
    console.log("[/translate]");
    const response = await service.translate(source, target, (text = q));
    console.log("[/translate_response_route]", response);
    res.status(200).json({
      status: 200,
      data: {
        translation: response,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  translateRoute: router,
};
