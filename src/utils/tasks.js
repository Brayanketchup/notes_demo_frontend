


// fetchTasks
const apiUrl = process.env.REACT_APP_API_URL;

export const fetchTasks = async () => {
      try {
        const res = await fetch(apiUrl + '/api/tasks');
        const data = await res.json();
        if (res.ok) {
          return data;
        } else {
          console.error('Failed to fetch notes:', data.error);
        }
      } catch (err) {
        console.error('Error fetching notes:', err);
      }
    };