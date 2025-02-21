document.addEventListener('DOMContentLoaded', () => {
    const objectiveElem = document.getElementById('objective-text');
    if (!objectiveElem) return;

    // Configuration: company cookie keys and their corresponding objective texts.
    const companyObjectives = {
        "ea_user": "Aspiring game designer with a passion for crafting innovative gameplay experiences at Electronic Arts. Ready to leverage my skills in graphics programming and game engine development for EA.",
        "epic_user": "Aspiring game designer with a passion for building immersive experiences at Epic Games. Eager to join Epic to push the boundaries of interactive entertainment."
        // ...add more companies here...
    };

    // Default objective text.
    const defaultObjective = "Aspiring software architect game designer with hands-on experience in graphics programming, game engine development, and agile project management. Eager to join the workforce in an innovative enviornment";

    const cookies = document.cookie;
    const matchedCompanies = Object.keys(companyObjectives).filter(key => cookies.includes(key + "=true"));

    // If exactly one company cookie is found, use that objective. Otherwise, fallback to default.
    if (matchedCompanies.length === 1) {
        objectiveElem.textContent = companyObjectives[matchedCompanies[0]];
    } else {
        objectiveElem.textContent = defaultObjective;
    }
});
