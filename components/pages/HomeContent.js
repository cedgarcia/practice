import { Intro } from '../Intro';
import { Button } from '../Button';
import { Projects } from '../Projects';

export const HomeContent = () => {
  return (
    <div>
      <Intro heading="CED" sub1="Coder" sub2="Explorer" sub3="Developer" />
      <Button text="View Projects" />
      <Projects />
    </div>
  );
};
