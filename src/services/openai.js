// Mock OpenAI Service for demonstration
// In a real application, you would use the openai npm package and make calls from a backend.

export const generateImage = async (prompt) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return a random mock image from unsplash that fits a variety of concepts
      resolve({
        url: `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop`,
        prompt: prompt
      });
    }, 2000); // 2 second delay to simulate network request
  });
};

export const generateResume = async (details) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        content: `
# Resume: ${details.name || 'Jane Doe'}

## Professional Summary
A highly motivated and creative professional with a passion for leveraging technology to solve complex problems. Excellent communication skills and a track record of delivering high-quality results.

## Experience
**Senior Professional** | 2020 - Present
- Led cross-functional teams to deliver innovative solutions.
- Increased efficiency by 30% through process optimization.

**Specialist** | 2017 - 2020
- Managed key projects from conception to deployment.
- Collaborated with stakeholders to define requirements and deliverables.

## Education
**Bachelor of Science** | University of Technology | 2017

## Skills
- ${details.skills || 'Project Management, Communication, Problem Solving, Leadership'}
        `.trim()
      });
    }, 2500); // 2.5 second delay
  });
};
