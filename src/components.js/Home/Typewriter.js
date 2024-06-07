```jsx
import React from "react";
import Typewriter from "typewriter-effect";

/**
 * Component that displays a typewriter effect with changing text.
 */
function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Developer",
          "Back End Developer",
          "Software Engineer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
```

