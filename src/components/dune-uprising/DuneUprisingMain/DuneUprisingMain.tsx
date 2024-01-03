import React from 'react';

import { styles } from './DuneUprisingMain.styles';

import { GameView } from '@/components/common/GameView';

interface ComponentProps {}

export const DuneUprisingMain = (props: ComponentProps) => {
    return <GameView onPressBack={() => undefined}>TemplateComponent</GameView>;
};
