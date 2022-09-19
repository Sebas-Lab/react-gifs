import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    };

    return (

        <>
            <h1>Gif_Expert_App</h1>

            <AddCategory onNewCategory = { onAddCategory } />

            { 
                categories.map( category => (
                    <GifGrid
                        key = { category } 
                        category = {category}
                    />
                ))
                
            }

        </>

    );

}

// rKuNxh57gb31JY9NsOL5CAFEcgHkg1tH
