import Part from './Part';

const Content = ({ course }) =>
  course.parts.map((part) => <Part key={part.name} part={part.name} exercise={part.exercises} />);

export default Content;
