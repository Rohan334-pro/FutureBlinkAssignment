// components/HtmlNode.js
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
export default function HtmlNode({ data }) {
    return (
        <div className='html-node bg-white rounded-xl p-4 shadow-lg border border-gray-300 w-60 text-center'>
            <div className='flex'>
                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faUserPlus} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.labelHtml }} />
            </div>
        </div>
    );
}
