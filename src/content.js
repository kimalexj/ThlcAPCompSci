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
        title: "Today (2017 FRQ)",
        body: "The link will send you to the full exam but we're only going to be covering the multiple choice today.",
        imagePath: selectImage(),
        alt: 'card image',
        url: 'https://drive.google.com/file/d/1K0nvw7qiiBTN_Oney5ICFImo5we3MOzE/view?usp=sharing',
        urlSecond: 'https://drive.google.com/file/d/1dqp5HHsFBOzjdLtMMKO79APSOP-LaQl4/view?usp=sharing',
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