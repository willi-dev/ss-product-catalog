import React from 'react';

const ModalDisplay = ( {closeModal, showModal, children} ) => {
	const classModal = showModal ? 'ss-modal__screen ss-modal__screen--display' : 'ss-modal__screen ss-modal__screen--none';
	return (
		<div className={classModal} onClick={closeModal}>
			<div className="ss-modal__content">
				{children}
				
			</div>
			<div className="ss-modal__close" onClick={closeModal}>
				<span aria-hidden="true">×</span>
			</div>
		</div>
	);
	
};

export default ModalDisplay;