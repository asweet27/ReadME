function generateMarkdown(data) {
    return `
  # ${data.title},
  


  [![MIT badge]( https://img.shields.io/apm/l/vim-mode)
# Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [Licences](#licences)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

# Description
## ${data.description}

# Installation
## ${data.installation}

# Usage
## ${data.usage}

# Licenses
## ${data.license}

# Contribution
## ${data.contributing}

# Tests 
## ${data.tests}

# Questions
## ${data.author}
`;
  
  
  };
  
 
  module.exports = generateMarkdown;