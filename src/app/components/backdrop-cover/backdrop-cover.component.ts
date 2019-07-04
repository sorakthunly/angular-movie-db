import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
	selector: 'app-backdrop-cover',
	templateUrl: './backdrop-cover.component.html',
	styleUrls: ['./backdrop-cover.component.scss']
})
export class BackdropCoverComponent implements OnInit, OnChanges {
	/** Image URL to show as backdrop cover */
	@Input() imageUrl: string;

	/** Sanitised image URL */
	sanitizedImage: SafeStyle;

	constructor(private sanitize: DomSanitizer) {}

	ngOnInit() {
		this.sanitizeImageInput();
	}

	ngOnChanges() {
		this.sanitizeImageInput();
	}

	/**
	 * @description
	 * Sanitise the image URL for background display.
	 */
	sanitizeImageInput() {
		this.sanitizedImage = this.sanitize.bypassSecurityTrustStyle(`url(${this.imageUrl})`);
	}
}
