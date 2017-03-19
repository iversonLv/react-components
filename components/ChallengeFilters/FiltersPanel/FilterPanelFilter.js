/**
 * This Filter class represents the filters managed by the FiltersPanel component.
 * Have a look at the base class for additional details.
 */

import _ from 'lodash';
import moment from 'moment';
import BaseFilter from '../BaseFilter';

class FilterPanelFilter extends BaseFilter {

  constructor(arg) {
    if (!arg) {
      super();
      this.endDate = null;
      this.keywords = [];
      this.startDate = null;
      this.subtracks = [];
    } else if (arg.isSavedFilter) {
      super(arg);
      const filters = arg.filter.split('&');

      this.startDate = filters.filter(e => e.startsWith('startDate'))
        .map(element => element.split('=')[1]);
      this.startDate = this.startDate ? moment(this.startDate[0]) : null;
      this.endDate = filters.filter(e => e.startsWith('endDate'))
        .map(element => element.split('=')[1]);
      this.endDate = this.endDate ? moment(this.endDate[0]) : null;

      this.keywords = filters.filter(e => e.startsWith('keywords'))
        .map(element => element.split('=')[1]);
      this.subtracks = filters.filter(e => e.startsWith('challengeTypes'))
        .map(element => element.split('=')[1]);
    } else  if (_.isObject(arg)) {
      if (!arg._isFilterPanelFilter) throw new Error('Invalid argument!');
      super(arg);
      this.endDate = arg.endDate ? moment(arg.endDate) : null;
      this.keywords = _.cloneDeep(arg.keywords);
      this.startDate = arg.startDate ? moment(arg.startDate) : null;
      this.subtracks = _.cloneDeep(arg.subtracks);
    } else if (_.isString(arg)) {
      const f = JSON.parse(atob(arg));
      super(f[0]);
      this.endDate = f[1] === 'null' ? null : moment(f[1]);
      this.keywords = f[2].split(',');
      this.startDate = f[3] === 'null' ? null : moment(f[3]);
      this.subtracks = f[4].split(',');
    } else throw new Error('Invalid argument!');
    this._isFilterPanelFilter = true;
  }

  count() {
    let res = super.count();
    if (this.keywords.length && this.keywords[0]) res += 1;
    if (this.subtracks.length && this.subtracks[0]) res += 1;
    if (this.endDate || this.startDate) res += 1;
    return res;
  }

  getFilterFunction() {
    const parent = super.getFilterFunction();
    return (item) => {
      if (!parent(item)) return false;
      if (this.subtracks.length && this.subtracks[0]
      && !this.subtracks.includes(item.challengeType)) return false;
      if (this.startDate && this.startDate.isAfter(item.submissionEndDate)) return false;
      if (this.endDate && this.endDate.isBefore(item.postingDate)) return false;
      if (!this.keywords.length || !this.keywords[0]) return true;
      const platforms = item.platforms.join(' ');
      const techs = item.technologies.join(' ');
      const data = `${item.challengeName} ${platforms} ${techs}`.toLowerCase();
      for (let i = 0; i !== this.keywords.length; i += 1) {
        if (data.indexOf(this.keywords[i].toLowerCase()) >= 0) return true;
      }
      return false;
    };
  }

  merge(filter) {
    super.merge(filter);
    if (!filter._isFilterPanelFilter) return this;
    this.endDate = filter.endDate ? moment(filter.endDate) : null;
    this.keywords = _.cloneDeep(filter.keywords);
    this.startDate = filter.startDate ? moment(filter.startDate) : null;
    this.subtracks = _.cloneDeep(filter.subtracks);
    return this;
  }

  stringify() {
    return btoa(JSON.stringify([
      super.stringify(),
      this.endDate ? this.endDate.toString() : 'null',
      this.keywords.join(','),
      this.startDate ? this.startDate.toString() : 'null',
      this.subtracks.join(','),
    ]));
  }

  getURLEncoded() {
    let result = '';
    result += this.startDate ? `&startDate=${this.startDate.format('YYYY-MM-DD')}` : '';
    result += this.endDate ? `&endDate=${this.endDate.format('YYYY-MM-DD')}` : '';
    result += this.keywords.length > 0 ?
      this.keywords.reduce((acc, keyword) => `${acc}&keywords[]=${keyword}`, '') : '';
    result += this.subtracks.length > 0 ?
      this.subtracks.reduce((acc, subtrack) => `${acc}&challengeTypes[]=${subtrack}`, '') : '';
    return result;
  }
}

export default FilterPanelFilter;