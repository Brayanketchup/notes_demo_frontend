const apiUrl = process.env.REACT_APP_API_URL;



export const fetchNotes = async () => {
      try {
        const res = await fetch(apiUrl + '/api/notes');
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
    

export const fetchNotesById = async ( id ) => {
      try {
        const res = await fetch(apiUrl + '/api/notes/' + id);
        const data = await res.json();
        if (res.ok) {
          return data;
        } else {
          console.error('Failed to fetch the note:', data.error);
        }
      } catch (err) {
        console.error('Error fetching note by id:', err);
      }
    };



export const fetchDeletedNotes = async () => {
      try {
        const res = await fetch(apiUrl + '/api/notes/deleted');
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
    

  