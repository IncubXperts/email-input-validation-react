<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/IncubXperts/email-input-validation-react">
    <img src="./public/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Email Input Validation Using React</h3>
  <p align="center">
    This is an effort by [IncubXperts](https://incubxperts.com) to provide commonly used source code snippets as open source code to community. Feel free to use it in your projects, suggest improvements, report bugs to improve the code for community.  Feel free to contribute. 
    <br />
    Source code example to generate a thumbnail from an image.  
    <br />
    <a href="https://github.com/IncubXperts/email-input-validation-react/issues">Report Bug</a>
   �
    <a href="https://github.com/IncubXperts/email-input-validation-react/issues">Request Feature</a>
   �
    <a href="https://github.com/IncubXperts/code-ideas-requests/issues">Request new source code</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#Contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Source code example to check for a valid email id. 
An email validator project is a software program that is designed to verify the validity of an email address. The program typically takes an email address as input and checks it against various rules and conventions to determine whether it is a valid email address.
The email validator project is often used by organizations to validate email addresses of their customers, subscribers, or leads, to prevent sending emails to invalid or non-existent email addresses.

This sample source code provides an example to check for valid email id. 
The user enters an email id  
Then the entered email id is tested with given regular expression, and displays a proper valid/in-valid message to the user.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

ReactJs.
* [[React Js]][https://react.dev/learn/start-a-new-react-project]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Node Js
* At least one installed code Editor to test and debug your code e.g.  Visual Studio Code, Sublime 

### Installation

1. Understand the code and use in your project as fit. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

```
const handleOnChange = (e) => {
        setEmail(e.target.value);
        //regular expression to check for valid email address.
        let regex = /^([a-z0-9._+-])+([._+-]{0,})+([a-z0-9._+-]{0,})+@[a-z0-9]+([a-z]{0,})+\.[a-z0-9]{1,}$/
        //"test" is a predefined function to test the entered text with the given regular expression.
        const result = regex.test(e.target.value);
        if (result === false) {
            document.getElementById('error-msg').innerHTML = "Please enter a valid email id";
            document.getElementById('error-msg').style = "color:red";

        }
        else {
            document.getElementById('error-msg').innerHTML = "Valid email id";
            document.getElementById('error-msg').style = "color:green";
        }

    }

```
* To use the same functionality in angular please follow the below steps:
1. Create an angular app.
2. Import Reactive Forms Module.
3. Define a formGroup 
3. Add the below lines to your component.ts file

```
 this.emailValidateForm = new FormGroup({
      Email: new FormControl("", [Validators.pattern(/^([a-z0-9._+-])+([._+-]{0,})+([a-z0-9._+-]{0,})+@[a-z0-9]+([a-z]{0,})+\.[a-z0-9]{1,}$/)])
    })
    
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the GPL License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

IncubXperts - [@incubxperts](https://twitter.com/incubxperts) - contact@incubxperts.com

Project Link: [https://github.com/IncubXperts/email-input-validation-react](https://github.com/IncubXperts/email-input-validation-react)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [IncubXperts](https://incubxperts.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/IncubXperts/image_thumbnail_csharp.svg?style=for-the-badge
[contributors-url]: https://github.com/IncubXperts/image_thumbnail_csharp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/IncubXperts/image_thumbnail_csharp.svg?style=for-the-badge
[forks-url]: https://github.com/IncubXperts/image_thumbnail_csharp/network/members
[stars-shield]: https://img.shields.io/github/stars/IncubXperts/image_thumbnail_csharp.svg?style=for-the-badge
[stars-url]: https://github.com/IncubXperts/image_thumbnail_csharp/stargazers
[issues-shield]: https://img.shields.io/github/issues/IncubXperts/image_thumbnail_csharp.svg?style=for-the-badge
[issues-url]: https://github.com/IncubXperts/image_thumbnail_csharp/issues
[license-shield]: https://img.shields.io/github/license/IncubXperts/image_thumbnail_csharp.svg?style=for-the-badge
[license-url]: https://github.com/IncubXperts/image_thumbnail_csharp/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/incubxperts
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 