import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Logo = () => {
    const [logo, setlogo] = useState();

    useEffect(() => {
        axios.put('')
    }, []);
    return (
        <div>
            Logo
        </div>
    );
}

export default Logo;
