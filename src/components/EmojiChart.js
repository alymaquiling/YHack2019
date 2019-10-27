import React, { Component } from 'react';
import BarChart from './BarChart';

let data = [["Words","Counts"],
            ['✈', 9],
            ['😭', 8],
            ['🇧', 4],
            ['☀', 4],
            ['🌴', 4],
            ['👌', 3],
            ['😉', 3],
            ['🐥', 2],
            ['🔥', 2],
            ['☝', 2],
            ['🙏', 2],
            ['🌞', 2],
            ['🇺', 2],
            ['😑', 1],
            ['😎', 1],
            ['😂', 1],
            ['🍪', 1],
            ['☕', 1],
            ['👉', 1],
            ['💯', 1],
            ['🎶', 1],
            ['♀', 1],
            ['🌺', 1],
            ['⛅', 1],
            ['🌄', 1],
            ['🌕', 1],
            ['📖', 1],
            ['🇸', 1],
            ['🇳', 1],
            ['🇴', 1],
            ['🇲', 1],
            ['⚡', 1],
            ['🌎', 1]]

class EmojiChart extends Component {
    render() {
        return (
            <>
            <h1>Emoji Analysis</h1>
            <BarChart data={data}></BarChart>
            </>
        );
    }
}

export default EmojiChart;