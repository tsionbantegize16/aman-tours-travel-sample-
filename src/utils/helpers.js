// Example utility function (you can add more as needed)
export const formatDate = (dateString) => {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    } catch (error){
        return 'Invalid Date';
    }
  
  };