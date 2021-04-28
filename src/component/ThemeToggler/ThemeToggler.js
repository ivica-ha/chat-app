import React, {useEffect, useState} from 'react';
import './style.scss';
import useDocumentBodyClass from "../../hooks/useDocumentBodyClass";

const dark = 'Dark';
const light = 'Light';
const defaultTheme = localStorage.getItem('theme') || light;

const ThemeToggler = () => {
    const [theme, setTheme] = useState(defaultTheme);

    const toggleTheme = () => {
        theme === light ? setTheme(dark) : setTheme(light)
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    useDocumentBodyClass(theme)

    return (
        <div className='d-flex'>
            <label className='switch p-relative'>
                <input
                    onChange={toggleTheme}
                    checked={theme === dark}
                    type='checkbox'
                />
                <span className='slider round'/>
            </label>
            <span>{theme} theme</span>
        </div>
    );
};

export default ThemeToggler;
