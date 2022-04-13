import cartoon from './img/cartoon.png';
import circles from './img/circles.png';
import lines from './img/lines.png';
import person from './img/person.png';

const IMAGES = [cartoon, circles, lines, person];

const selectImage = () => {
    return IMAGES[Math.floor(Math.random() * IMAGES.length)];
}

const cardContent = [
    {
        title: "Today (2016 FRQ)",
        body: "We'll be going over these questions one by one and breaking down the solutions, scoring, and distribution.",
        imagePath: selectImage(),
        alt: 'card image',
        url: 'https://drive.google.com/file/d/1g-0qeFrvZ7T3B4-BxWm8fjGjQKlT6ddz/view?usp=sharing',
        urlSecond: 'https://drive.google.com/file/d/1REFMKwkputithvEuT2zGsqFRW8d3TpxW/view?usp=sharing',
        hideAnswer: true,
    },
    {
        title: "Remaining Time (2013)",
        body: "If we manage to go over all of the questions for the exam set for today, we'll move onto this one for the reaminder of time.",
        imagePath: selectImage(),
        alt: 'card image',
        url: 'https://drive.google.com/file/d/1ikbpm5lyvLnS49Pr9Dkx5V077UbOy2hb/view?usp=sharing',
        urlSecond: 'https://drive.google.com/file/d/17zld3z8jDERfXHPIvfjymR7gs0QHYYHM/view?usp=sharing',
        hideAnswer: true,
    }
];

export default cardContent;