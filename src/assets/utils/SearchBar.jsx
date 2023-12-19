import React from 'react';

export function SearchBar({ value, onChange }) {
    return (
        <input
            className="field"
            type="search"
            placeholder='Search...'
            value={value}
            onChange={onChange}
        />
    );
}