import { describe, expect, it } from 'vitest';
import { StopWatch } from './stop-watch';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<StopWatch>', () => {
  it('<StopWatch> 컴포넌트의 초기 currentTime은 0이다.', () => {
    const { getByTestId } = render(
      <StopWatch>
        {({ currentTime }) => (
          <span data-testid="current-time">{currentTime}</span>
        )}
      </StopWatch>,
    );

    const currentTime = getByTestId('current-time');
    expect(currentTime.textContent).toBe('0');
  });

  it('<StopWatch> 컴포넌트의 start 함수를 호출하면 isRunning이 true가 된다.', async () => {
    const { getByTestId } = render(
      <StopWatch>
        {({ isRunning, start, pause }) => (
          <button
            data-testid="stop-watch-button"
            onClick={isRunning ? pause : start}
          >
            {isRunning ? 'pause' : 'start'}
          </button>
        )}
      </StopWatch>,
    );

    const button = getByTestId('stop-watch-button');
    expect(button.textContent).toBe('start');

    await userEvent.click(button);
    expect(button.textContent).toBe('pause');

    await userEvent.click(button);
    await userEvent.click(button);
    expect(button.textContent).toBe('pause');
  });

  it('<StopWatch>가 제공하는 isRunning과 isStopped, isPaused는 상호 배타적이다.', async () => {
    const { getByTestId } = render(
      <StopWatch>
        {({
          isRunning,
          isStopped,
          isPaused,
          currentTime,
          start,
          pause,
          reset,
        }) => (
          <section>
            <button
              data-testid="start-button"
              onClick={start}
            >
              Start
            </button>
            <button
              data-testid="pause-button"
              onClick={pause}
            >
              Pause
            </button>
            <button
              data-testid="reset-button"
              onClick={reset}
            >
              Reset
            </button>
            <p data-testid="current-time">{currentTime}</p>
            <div>
              <span data-testid="is-running">{isRunning ? 'running' : ''}</span>
              <span data-testid="is-stopped">{isStopped ? 'stopped' : ''}</span>
              <span data-testid="is-paused">{isPaused ? 'paused' : ''}</span>
            </div>
          </section>
        )}
      </StopWatch>,
    );

    const currentTime = getByTestId('current-time');
    const startButton = getByTestId('start-button');
    const pauseButton = getByTestId('pause-button');
    const resetButton = getByTestId('reset-button');
    const isRunning = getByTestId('is-running');
    const isStopped = getByTestId('is-stopped');
    const isPaused = getByTestId('is-paused');

    expect(currentTime.textContent).toBe('0');
    expect(isRunning.textContent).toBe('');
    expect(isStopped.textContent).toBe('stopped');
    expect(isPaused.textContent).toBe('');

    await userEvent.click(startButton);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(currentTime.textContent).not.toBe('0');
    expect(isRunning.textContent).toBe('running');
    expect(isStopped.textContent).toBe('');
    expect(isPaused.textContent).toBe('');

    await userEvent.click(pauseButton);
    expect(isRunning.textContent).toBe('');
    expect(isStopped.textContent).toBe('');
    expect(isPaused.textContent).toBe('paused');

    await userEvent.click(resetButton);
    expect(currentTime.textContent).toBe('0');
    expect(isRunning.textContent).toBe('');
    expect(isStopped.textContent).toBe('stopped');
    expect(isPaused.textContent).toBe('');
  });
});
