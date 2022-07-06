import React from 'react';
import '../App.css'

const Home = () => {
  return (
    <div className="container">
        <div className="instructions">
            <div className='intro-text'>
                <p>
                    <strong> Well done!</strong>&nbsp;You made it to the assessment stage of the Zoee interview 
                    process and successfully cloned and fired up the application. As you were instructed, you 
                    have two hours to complete the list of tasks below. If you have additional time after completing them,
                    you can attempt to complete the bonus tasks. 
                </p>
                <ul>
                    <li>
                    Remember to refer to the figma designs you were provided and do the best you can to match the features you create
                    to those designs.
                    </li>
                    <li>
                        We urge you to make commits frequently throughout the assessment, and remember that your assessment will
                        be evaluated based only on commits made before the two hours is up.
                    </li>
                    <li>
                        You are welcome to use any React packages or css libraries you'd like to make life easier. This React project uses yarn
                        as opposed to NPM as its package manager, so use 'yarn add' for any packages. We use TailwindCSS at Zoee, for example.
                        That being said, it's also completely ok not to use any packages.
                    </li>
                    <li>
                        There is a 'styles' folder provided where you can add as many new stylesheets as you'd like. If desired you can add your styles to the existing App.css sheet as well. Up to you.
                    </li>
                </ul>
                <div className="good-luck">Best of luck!!!</div>
            </div>
            <div className="title">Task List</div>
            <div className="sections">
                <div className="section">
                    <h5 className="section-title">Part 1: Complete the navbar</h5>
                    <ol>
                        <li>Add the icon to the far right of the navigation bar that shows the user’s initial. There is a user object in the applications state (App.js) where you can pull their first initial from.</li>
                        <li>Make the navigation links (Home, Contacts) dynamic. The link for the page you are currently on should be black and bold, while the other links remain gray.</li>
                        <li>Make the navigation links work. Currently they aren’t active. They should allow us to navigate between the two pages!</li>
                    </ol>
                </div>
                <div className="section">
                    <h5 className="section-title">Part 2: Complete the contacts page</h5>
                    <p>
                        On the contacts component, we want to show a list of clients so our coach can easily see and get in touch with them. For the purposes of the challenge, you can use <a href="https://random-data-api.com/documentation" className='api-link'>THIS</a> random user generator api to get a list of fake clients. In the documentation you'll see an endpoint for "Users". This is the one you should use!
                    </p>
                    <ol>
                        <li>Using fetch or the HTTP client of your choosing, retrieve a list of 20 randomly generated users from the API and use a state variable to store them in the ‘Contacts’ component.</li>
                        <li>Add the ‘Search for contact’ field, along with the ‘New Contact’ button.</li>
                        <li>Display the list of contacts as you see them in the ‘Contacts’ Figma design. The card should show the contact’s first name, last name, email address, and image.</li>
                        <li>Enable filtering the contacts list using the search field you created before. The user should be able to search by the contact’s first or last name.</li>
                        <li>Display the ‘New Contact’ modal when clicking the ‘New Contact’ button.</li>
                        <li>Enable the new contact form so that the user can add a new contact with a first name, last name, and email address. Since your new contact won’t have an image for their contact card, you can display a colored circle containing their first initial where the image would normally go.</li>
                    </ol>
                </div>
                <div className="section">
                    <h5 className="section-title">Part 3: BONUS!</h5>
                    <p>
                        If you finished parts one and two and still have time remaining, you can give the additional tasks below a try.
                    </p>
                    <ol>
                        <li>Add error handling to the new contact form. If any of the fields are empty, stop the form from submitting, display an error message, and outline the missing fields in red. Check the bonus Figma board for the designs for this! If you want to get fancier, you can add a check to make sure the email is in a valid format.</li>
                        <li>Add a hover effect to the contact cards. See the bonus Figma board for this design!</li>
                        <li>Allow the user to delete contacts from the list. There's no figma design for a delete button, so be creative with this one!</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
