import React from 'react';
import config from '../../../../../../app.config';

const MenuLinks = () => (
    <div className="header__menu-item header__menu-links client_logged_in">
        {config.reports.visible && <a className="url-reports-positions header__menu-links-item" href={config.reports.url}>
            <span>
                <img className="header__icon-text reports-icon" src="image/deriv/ic-reports.svg" />
            </span>
            <p>
                {config.reports.label}
            </p>
        </a>}
        {config.reports.visible && <a className="url-cashier-deposit header__menu-links-item" href={config.cashier.url}>
            <span>
                <img id="cashier_icon" className="header__icon-text" src="image/deriv/ic-cashier.svg" />
            </span>
            <p>
                {config.cashier.label}
            </p>
        </a>}
    </div>
);

export default MenuLinks; 
