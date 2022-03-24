const a = {
  liverInfo: {
    segmentations: [
      { segmentationJsonUrl: "a.json", seriesInstanceUid: "xxx" },
      { segmentationJsonUrl: "b.json", seriesInstanceUid: "xxx_2" },
    ],
    volume: "vol1",
  },
  note: None,
  status: "NONE",
  studyId: 10,
  tumorInfos: [
    {
      aiScore: 1.2,
      diameter: 1.3,
      parentCode: "HCC",
      segmentationJsonUrl: "tu.json",
      volume: "123",
    },
    {
      aiScore: 1.2,
      diameter: 1.3,
      parentCode: "HCC",
      segmentationJsonUrl: "tu_2.json",
      volume: "1234",
    },
  ],
};
