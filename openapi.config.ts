const { generateService } = require("@umijs/openapi");

generateService({
  requestLibPath: "import request from '@/request'",
  schemaPath: "8.130.84.248:7000/api/v2/api-docs",
  serversPath: "./src",
});
