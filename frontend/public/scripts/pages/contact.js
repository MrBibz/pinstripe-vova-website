document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.background');

    const rows = 10;
    const cols = 20;
    const totalCells = rows * cols;

    const palette = [
        '#042900', '#f501ff', '#c820d5', '#d4c8d6',
        '#c34ce6', '#e93adf', '#e1fada', '#dbf2ea',
        '#eaa2ad', '#56569b', '#e3fb9d', '#c3fff3',
        '#a70036', '#7d5cab', '#977586', '#e617d9',
        '#fbd3f6', '#d9ceba', '#f8fefe', '#6e7da8',
        '#fff391', '#c0b3cf', '#c7afa5', '#ceffc8',
        '#ffddd4', '#fdc6a8', '#c7a4e4', '#fdb8d2',
        '#fffdff', '#e6ffab', '#adfcff', '#e0ffff',
        '#ffb6ca', '#75601f', '#6bac8a', '#805978',
        '#440009', '#9f9d24', '#adddab', '#592d3a',
        '#003f0a', '#cfffb5', '#01004c', '#e1b2bc',
        '#013d23', '#9de79c', '#762706', '#45233c',
        '#0d1b0c', '#3f2123', '#00000a', '#862d65',
        '#23015f', '#54a44d', '#10001b', '#4e4734',
        '#ffc1f2', '#481418', '#050400', '#410304',
        '#99a162', '#410507', '#d3cfb6', '#fffcf9',
        '#ffffcd', '#79423f', '#ddd5fc', '#dcf7ca',
        '#e7d8ff', '#ff00dc', '#fa14ff', '#2d0150',
        '#a28d7a', '#fbddff', '#6c5b61', '#77867f',
        '#fdfffc', '#fbffde', '#f6f1c7', '#c612fa',
        '#ff3ffe', '#350c1c', '#acbdb3', '#eee9e5',
        '#81536f', '#aab3ba', '#f4fef6', '#dfe9e1',
        '#e8f9cd', '#bf9b9f', '#ddbfbd', '#a2888f',
        '#657982', '#6b7889', '#8f949a', '#c2bad1',
        '#fefefe'
    ];

    function randomColor() {
        return palette[Math.floor(Math.random() * palette.length)];
    }

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.style.backgroundColor = randomColor();
        grid.appendChild(cell);
    }
});
