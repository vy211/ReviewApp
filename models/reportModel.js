// models/reportModel.js

const { supabase } = require("../supabase");

class ReportModel {
  async createReport(email, eventId) {
    const { data, error } = await supabase
      .from("reports")
      .insert({ email, eventId })
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async getReportsByEventId(eventId) {
    const { data, error } = await supabase
      .from("reports")
      .select("*")
      .eq("eventId", eventId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}

module.exports = new ReportModel();
