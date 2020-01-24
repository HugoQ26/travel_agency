import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  const id = 'abc';
  const alt = 'running dog';
  const src =
    'https://loremflickr.com/400/200/landscape,Timor-Leste/all?lock=3';
  const cost = '2000';
  const days = 1;

  let component = shallow(
    <TripSummary
      id={id}
      tags={['tag1', 'tag2', 'tag3']}
      image={src}
      name={alt}
      cost={cost}
      days={days}
    />,
  );

  it('should render without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('generate proper link with given id', () => {
    expect(component.find('Link').prop('to')).toEqual(`/trip/${id}`);
  });

  it('should render correct name, cost and days ', () => {
    const renderedTitle = component.find('.title').text();
    const detailsDiv = component.find('.details');

    expect(detailsDiv.childAt(0).text()).toEqual(days + ' days');
    expect(detailsDiv.childAt(1).text()).toEqual('from ' + cost);
    expect(renderedTitle).toEqual(alt);
  });

  it('have img tag with proper alt and src', () => {
    expect(component.find('img').prop('src')).toEqual(src);
    expect(component.find('img').prop('alt')).toEqual(alt);
  });

  it('should throw error without required props (id, image, name, cost, days)', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags in spans and in proper order', () => {
    const tagsSpans = component.find('.tag');

    expect(tagsSpans.at(0).type()).toEqual('span');
    expect(tagsSpans.at(0).text()).toEqual('tag1');
    expect(tagsSpans.at(1).type()).toEqual('span');
    expect(tagsSpans.at(1).text()).toEqual('tag2');
    expect(tagsSpans.at(2).type()).toEqual('span');
    expect(tagsSpans.at(2).text()).toEqual('tag3');
  });

  it('should not render div with class tags id prop tags is an empty [] or without this prop', () => {
    component = shallow(
      <TripSummary
        id={id}
        tags={[]}
        image={src}
        name={alt}
        cost={cost}
        days={days}
      />,
    );
    expect(component.find('.tags')).toHaveLength(0);

    component = shallow(
      <TripSummary id={id} image={src} name={alt} cost={cost} days={days} />,
    );
    console.log(component.debug);
    expect(component.find('.tags')).toHaveLength(0);
  });
});
