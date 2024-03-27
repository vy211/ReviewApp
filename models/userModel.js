// models/userModel.js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://clencqbfytkzoqzhzmfc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZW5jcWJmeXRrem9xemh6bWZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1MzM0NzksImV4cCI6MjAyNzEwOTQ3OX0.uHcIzlNuwkQ1dhyRvze3cogwlrSArStaNi5TivJev0o');

class UserModel {
  async getUsers() {
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw error;
    return data;
  }

  // Add other methods for user CRUD operations
}

module.exports = new UserModel();
