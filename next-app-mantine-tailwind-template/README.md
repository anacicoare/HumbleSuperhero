# Superhero Frontend Description

This is the frontend for the Humble Superhero API, built with Next.js 15, Mantine 7, Tailwind CSS, and Framer Motion. It provides a modern and interactive interface to manage superheroes by allowing users to add new entries and view a dynamically updated roster.

This is based on a minimal template for a Next.js project with Mantine and Tailwind CSS, provided by the Mantine team. 

More of these templates can be explored here: [mantine official website](https://mantine.dev/getting-started/)

## More information

- [Mantine](https://mantine.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [tailwind-preset-mantine](https://github.com/songkeys/tailwind-preset-mantine)



## Setup instructions

1. Clone the repository:
```
git clone <repository-url>
```
2. Install dependencies:
```
npm install
```
3. Run the application:
```
npm run dev
```


UI will be available at:
http://localhost:4000

## Features

- **Add New Superhero**: Fill out a form to submit a superhero's name, superpower, and humility score.
- **View Superhero List**: Displays the list of superheroes sorted by their humility scores.
- **Responsive Design**: The interface adapts to various screen sizes for a seamless experience.

## Technologies
- Next.js (React-based framework for SSR and static site generation with a strong SEO performance)
- Mantine (component library with built-in form controls and notifications)
- Tailwind CSS (utility-first CSS framework)
- Framer Motion (for smooth animations)

## Project Structure
```
src/
  ├── app/                   # Next.js root pages
  │   └── index.tsx          # Main superhero management page
  ├── components/            # Reusable components
```

## Usage

**Adding a Superhero**

Fill out the form on the right-hand side with the superhero's:
- Name
- Superpower
- Humility score (0-10)
Click the Add Superhero button.

**Viewing heroes**

The superhero list is displayed on the left-hand side of the screen.
If no superheroes exist, a message is displayed informing the user.

## API Integration

The frontend communicates with the Humble Superhero API using Axios.
Sample API request:
```
  // Fetch superheroes from the Nestjs API
  const fetchSuperheroes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/superheroes");
      setSuperheroes(response.data);
    } catch (error) {
      console.error("Failed to fetch superheroes.");
    }
  };
```

## If I had more time

If I had more time, I would explore the following improvements:

### Client-side Pagination and Filtering:
Add options to filter and paginate the superhero list, improving the user experience for large datasets.

### Improved Form Validation:
Use Mantine's built-in validation to provide real-time feedback on form inputs.

### Notification on invalid inputs:
Add error boundaries to gracefully handle invalid input in the UI, notifying users, further enhancing user experience. This would also mean no request would be sent to the API, improving overall efficiency.

### State management:
Integrate Reducer and Context APIs for better state management on creating new superheroes. This would allow better modularity by dividing the table and form into components.

More details here: [React docs](https://react.dev/learn/scaling-up-with-reducer-and-context)

### Code modularity:
Divide the main page into 2 components, the form and the table. This would improve code readibility.