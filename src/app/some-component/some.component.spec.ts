import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { SomeComponent } from './some.component';

describe('SomeComponent', () => {
  let fixture: ComponentFixture<SomeComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SomeComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(SomeComponent);
  });

  it('should have an h1', () => {
    const h1: HTMLHeadingElement | null =
      fixture.nativeElement.querySelector('h1');
    const headerText = h1?.innerHTML;

    expect(headerText).toBe('Some header');
  });

  it('should match snapshot', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
