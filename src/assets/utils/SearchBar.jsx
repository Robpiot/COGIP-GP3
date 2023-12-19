import React, { useState } from 'react';

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }

    return (
        <input
            className="field"
            type="text"
            placeholder='Search...'
            value={searchTerm}
            onChange={handleChange}
        />
    );
}