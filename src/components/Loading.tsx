import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [introVisible, setIntroVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const logoSpan = document.querySelectorAll('.logo');
    const intro = document.querySelector('.intro') as HTMLDivElement;

    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 300);
      });
    }, 6000);

    const simulateLoading = () => {
      const increment = 100 / 300;
      let currentProgress = 0;

      const interval = setInterval(() => {
        currentProgress += increment;
        setLoadingProgress(currentProgress);

        if (currentProgress >= 100) {
          clearInterval(interval);

          // Animate the loading bar to fill up
          const loadingBar = document.querySelector('.loading-bar') as HTMLDivElement;
          loadingBar.style.width = '100%';

          // Hide the intro and move it up
          setTimeout(() => {
            intro.style.top = '-100vh';
          }, 500); // You can adjust the delay as needed
          setTimeout(() => {
            setIntroVisible(false);
          }, 1000); // You can adjust the delay as needed
        }
      }, 10); // Adjust the interval for smoother progress updates
    };

    simulateLoading();
  }, []);

  return (
    <>
      {introVisible && (
        <div className='intro text-xs sm:text-sm md:text-lg lg:text-2xl font-mono cursor'>
           <p className='logo-header px-0 ml-8 md:ml-4 sm:px-8 md:px-16 lg:px-32 '>
            <span className="logo">Growth is never by mere chance;</span>
            <br />
            <span className="logo">it is the result of forces working together.</span>
          </p>
            <div className="loading-bar-container">
            <div className="loading-bar" style={{ width: `${loadingProgress}%` }}></div>
        </div>
        </div>
      )}

    </>
  );
};

export default Loading;
