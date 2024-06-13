import { useCallback, useEffect, useReducer } from 'react';
import { useInterval } from './use-interval';

const FRAME_INTERVAL_MS = 1 / 60;

enum StopWatchState {
  /**
   * @description 타이머가 시작되었음을 나타내는 상태로 타이머의 시간이 흐른다.
   */
  Running,
  /**
   * @description 타이머가 완전히 정지되었음을 나타내는 상태로 타이머의 시간이 0으로 초기화된다.
   */
  Stopped,
  /**
   * @description 타이머가 일시정지된 상태로 타이머의 시간은 유지된다.
   * 사용자가 타이머를 일시정지할 때 이 상태가 된다.
   */
  Paused,
}

interface StopWatchStateDefinition {
  state: StopWatchState;
  time: number;
}

enum StopWatchActionTypes {
  Start,
  Stop,
  Pause,
  Reset,
  Tick,
}

type StopWatchActions =
  | {
      type: StopWatchActionTypes.Start;
    }
  | {
      type: StopWatchActionTypes.Stop;
    }
  | {
      type: StopWatchActionTypes.Pause;
    }
  | {
      type: StopWatchActionTypes.Reset;
    }
  | {
      type: StopWatchActionTypes.Tick;
    };

function stopWatchReducer(
  state: StopWatchStateDefinition,
  action: StopWatchActions,
): StopWatchStateDefinition {
  switch (action.type) {
    case StopWatchActionTypes.Start:
      return {
        ...state,
        state: StopWatchState.Running,
      };
    case StopWatchActionTypes.Stop:
      return {
        ...state,
        state: StopWatchState.Stopped,
      };
    case StopWatchActionTypes.Pause:
      return {
        ...state,
        state: StopWatchState.Paused,
      };
    case StopWatchActionTypes.Reset:
      return {
        state: StopWatchState.Stopped,
        time: 0,
      };
    case StopWatchActionTypes.Tick:
      return {
        ...state,
        time: state.time + FRAME_INTERVAL_MS,
      };
    default:
      throw new Error(`Unsupported action type: ${action}`);
  }
}

function useStopWatchReducer(): [
  StopWatchStateDefinition,
  (action: StopWatchActions) => void,
] {
  return useReducer(stopWatchReducer, {
    state: StopWatchState.Stopped,
    time: 0,
  });
}

function useStopWatch(autoStart: boolean) {
  const [{ state, time: currentTime }, dispatch] = useStopWatchReducer();

  const start = useCallback(() => {
    dispatch({
      type: StopWatchActionTypes.Start,
    });
  }, [dispatch]);

  const pause = useCallback(() => {
    dispatch({
      type: StopWatchActionTypes.Pause,
    });
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch({
      type: StopWatchActionTypes.Reset,
    });
  }, [dispatch]);

  const tick = useCallback(() => {
    dispatch({
      type: StopWatchActionTypes.Tick,
    });
  }, [dispatch]);

  useEffect(() => {
    if (autoStart) {
      start();
    }
  }, [autoStart, start]);

  useInterval(
    () => {
      if (state === StopWatchState.Running) {
        tick();
      }
    },
    state === StopWatchState.Running ? FRAME_INTERVAL_MS : null,
  );

  return {
    isRunning: state === StopWatchState.Running,
    isStopped: state === StopWatchState.Stopped,
    isPaused: state === StopWatchState.Paused,
    currentTime,
    start,
    pause,
    reset,
  };
}

interface StopWatchProps {
  autoStart?: boolean;
  children: (props: {
    isRunning: boolean;
    isStopped: boolean;
    isPaused: boolean;
    currentTime: number;
    start: () => void;
    pause: () => void;
    reset: () => void;
  }) => JSX.Element;
}

export function StopWatch({
  autoStart = false,
  children,
}: StopWatchProps): JSX.Element {
  const { isRunning, isStopped, isPaused, currentTime, start, pause, reset } =
    useStopWatch(autoStart);

  return children({
    isRunning,
    isStopped,
    isPaused,
    currentTime,
    start,
    pause,
    reset,
  });
}
