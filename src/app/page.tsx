import { createClient } from '@supabase/supabase-js';

export default function TodoList() {



  const addTodo = async (formData: FormData) => {
    'use server';
    const supabaseUrl = 'https://oskbhzzesdqxycabkpjf.supabase.co';
    const supabaseKey = "process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9za2Joenplc2RxeHljYWJrcGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1MjU0NjUsImV4cCI6MjAzMjEwMTQ2NX0.P5sHuy0TdFRJUwnwex8P5aB0PfpC-nY9b0ccA6ZCePw";

    const supabase = createClient(supabaseUrl, supabaseKey);
    const todoItem = formData.get('todo');
    if (!todoItem) {
      return;
    }
    // Save todo item to database
    const { data, error } = await supabase.from('todos').insert({
      todo: todoItem,
    });
  };

  return (
    <>
      <h2>Server Actions Demo</h2>
      <div>
        <form action={addTodo} method="POST">
          <div>
            <label htmlFor="todo">Todo</label>
            <div>
              <input id="todo" name="text" type="text"
                placeholder="What needs to be done?"
                required
              />
            </div>
          </div>
          <div>
            <button type="submit"> Add Todo</button>
          </div>
          
        </form>
      </div>
    </>
  );
}