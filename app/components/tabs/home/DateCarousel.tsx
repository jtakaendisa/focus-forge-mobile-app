import { useMemo, useRef } from 'react';
import { FlashList } from '@shopify/flash-list';
import moment from 'moment';
import { styled, View } from 'tamagui';

import { useTodoStore } from '@/app/store';
import { DATE_CARD_HEIGHT, SCREEN_WIDTH } from '@/app/constants';
import DateCard from './DateCard';

const DateCarousel = () => {
  const selectedDate = useTodoStore((s) => s.selectedDate);
  const setSelectedDate = useTodoStore((s) => s.setSelectedDate);

  const weeks = useMemo(() => {
    const start = moment().add(0, 'weeks').startOf('week');

    return [-1, 0, 1, 2, 3].flatMap((adj) => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, []);

  const listRef = useRef<FlashList<(typeof weeks)[number]> | null>(null);

  return (
    <Container>
      <FlashList
        ref={listRef}
        data={weeks}
        renderItem={({ item }) => (
          <DateCard
            item={item}
            selectedDate={selectedDate}
            onPress={(date) => setSelectedDate(date)}
          />
        )}
        keyExtractor={(item) => item.date.toString()}
        estimatedItemSize={40}
        estimatedListSize={{ height: DATE_CARD_HEIGHT, width: SCREEN_WIDTH }}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollsToTop={false}
        ItemSeparatorComponent={ItemSeparator}
        extraData={selectedDate}
      />
    </Container>
  );
};

const Container = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: SCREEN_WIDTH,
  paddingVertical: 8,
});

const ItemSeparator = styled(View, {
  width: 10,
});

export default DateCarousel;
