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
        title: "Today (2014 FRQ)",
        body: "The link will send you to the 2014 FRQ, if you're unable to reach it just ask Alex. SKIP QUESTION 2",
        imagePath: selectImage(),
        alt: 'card image',
        url: 'https://drive.google.com/file/d/1UXZYR-lOzUt6oL5avXfQLhW7lcvbtOGD/view?usp=sharing',
        urlSecond: 'https://drive.google.com/file/d/1REFMKwkputithvEuT2zGsqFRW8d3TpxW/view?usp=sharing',
        hideAnswer: true,
    },
    {
        title: "Remaining Time (2013 Q4)",
        body: "If we manage to go over all of the questions for the exam set for today, we'll move onto this one for the remainder of time.",
        imagePath: selectImage(),
        alt: 'card image',
        url: 'https://drive.google.com/file/d/1ikbpm5lyvLnS49Pr9Dkx5V077UbOy2hb/view?usp=sharing',
        urlSecond: 'https://drive.google.com/file/d/17zld3z8jDERfXHPIvfjymR7gs0QHYYHM/view?usp=sharing',
        hideAnswer: false,
    }
];

export default cardContent;