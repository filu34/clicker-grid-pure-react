import './App.css';
import { useState, useEffect } from 'react';

function App() {

    const rows = 10;
    const columns = 10;

    let decrementArray = new Array( 10 );
    decrementArray.fill( { value: 9 } );

    const array2dCreator = ( rows, columns ) => {
        let new2dArray = new Array( rows );

        for ( let i = 0; i < new2dArray.length; i++ ) {
            new2dArray[i] = Array.from( Array( columns ).keys() );
        };
        return new2dArray;
    };

    // Create 2D array for Grid.
    const brickGrid = array2dCreator( 10, 10 );

	const [ state, setState ] = useState( { grid: brickGrid, decrement: decrementArray } );
	// const [ grid, setGrid ] = useState( brickGrid );
    // const [ decrement, setDecrement ] = useState( decrementArray );
	
	let { grid, decrement } = state;

    useEffect(()=>{
        console.log( "Actual Value of Grid: ", grid );
        console.log( "Actual Value of Decrement: ", decrement );
    },[ state ]);

    const onClickHandler = ( event, indexOfColumn, indexOfRow, column ) => {
        console.log( event.target.innerHTML );
        console.log( "IndexOfColumn", indexOfColumn );
        console.log( "IndexOfRow", indexOfRow );

        if( indexOfColumn >= 0 && indexOfColumn < columns && indexOfRow >= 0 && indexOfRow < rows ) {
            console.log( indexOfColumn, indexOfRow, column );

            console.log( typeof indexOfColumn );

            grid[ indexOfColumn ][ decrement[ indexOfColumn ] ] = "blue";

            // const updatedDecrement = decrement[ indexOfColumn ].value - 1;
            // console.log( "Decrement: ", updatedDecrement[ indexOfColumn ].value );
			decrement = decrement[ indexOfColumn ].value - 1;

			const newState = { 
				grid: grid, 
				decrement: decrement,
			};

			setState( newState );

            // setGrid( grid );
            // setDecrement( updatedDecrement );

        };

        console.log( "Set Grid:", grid );
    };

    return (
        <div id="App" className="App">
            <div className="Grid-Container">
                { grid.map( ( column) => {

                    const indexOfColumn = grid.indexOf( column );

                    return (
                        <div key={ indexOfColumn } className="row">
                            {   column.map( ( row ) => {

                                if ( grid[column] = column ) {
                                    console.log( true );
                                };

                                const indexOfRow = column.indexOf( row );
                                const index = `${ indexOfColumn }${ indexOfRow }`;

                                return (
                                    <div
                                        key={ index }
                                        id={ index }
                                        className={ `cell ${ indexOfColumn } ${ indexOfRow } ${ row }` }
                                        onClick={ ( event ) => onClickHandler( event, indexOfColumn, indexOfRow, column ) }
                                    >
                                        { indexOfColumn } { indexOfRow }
                                        { row }
                                    </div>
                                ) } ) }
                        </div>
                    )
                } ) }
            </div>
        </div>
    );
}

export default App;
