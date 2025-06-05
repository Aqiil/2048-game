import {PanResponder, GestureResponderEvent, PanResponderGestureState} from 'react-native';
import {Direction} from '@game/types'

export function useSwipe(onSwipe: (direction: Direction) => void) {
    const threshold = 30;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,

        onPanResponderRelease: (_: GestureResponderEvent, gesture: PanResponderGestureState) => {
            const {dx, dy} = gesture;

            if (Math.abs(dx) > Math.abs(dy)) {
                if (dx > threshold) onSwipe('right');
                else if (dx < -threshold) onSwipe('left');
            } else {
                if (dy > threshold) onSwipe('down');
                else if (dy < -threshold) onSwipe('up');
            }
        },
    });

    return panResponder.panHandlers;
}