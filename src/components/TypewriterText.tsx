import { useEffect, useState } from 'react';

export const TypewriterText = ({
  text,
  delay = 100,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (currentIndex === text.length) setIsDeleting(true);
    else if (currentIndex === 0) setIsDeleting(false);
    const timeout = setTimeout(() => {
      setDisplayText((prev) => !isDeleting ? prev + text[currentIndex] : prev.slice(0, -1));
      setCurrentIndex((prev) => !isDeleting ? prev + 1 : prev - 1);
    }, delay);
    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay, isDeleting]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
