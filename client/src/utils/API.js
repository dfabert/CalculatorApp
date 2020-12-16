import axios from "axios";

export default {
  getCalculations: function() {
    return axios.get("/api/calculations");
  },
  getCalculation: function(id) {
    return axios.get("/api/calculations/" + id);
  },
  deleteCalculation: function(id) {
    return axios.delete("/api/calculations/" + id);
  },
  saveCalculation: function(calculationData) {
    return axios.post("/api/calculations", calculationData);
  }
};
