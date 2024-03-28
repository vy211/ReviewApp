const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(process.env.SUPA_URL, process.env.SUPA_KEY);

module.exports = { supabase };
