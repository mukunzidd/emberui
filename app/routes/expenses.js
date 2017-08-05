import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [{
      id: '1',
      description: 'coffee',
      vendor: 'Cafe Neo',
      amount: '2000',
      incured_at: '2017-06-13',
      inserted_at: '2017-06-13'
    }, {
      id: '4',
      description: 'coffee',
      vendor: 'Cafe Negrita',
      amount: '2500',
      incured_at: '2017-06-01',
      inserted_at: '2017-06-13'
    }, {
      id: '5',
      description: 'Food',
      vendor: 'Cafe Neo',
      amount: '2504',
      incured_at: '2017-06-03',
      inserted_at: '2017-06-13'
    }, {
      id: '7',
      description: 'shopping',
      vendor: 'Supermarket',
      amount: '12000',
      incured_at: '2017-06-13',
      inserted_at: '2017-06-13'
    }, {
      id: '6',
      description: 'taxi',
      vendor: 'AC Group',
      amount: '250',
      incured_at: '2017-06-16',
      inserted_at: '2017-06-13'
    }, {
      id: '2',
      description: 'Food',
      vendor: 'Kill Me',
      amount: '3500',
      incured_at: '2017-06-10',
      inserted_at: '2017-06-13'
    }, {
      id: '3',
      description: 'Cleaning',
      vendor: 'cleaners Pro',
      amount: '3000',
      incured_at: '2017-06-11',
      inserted_at: '2017-06-12'
    }];
	}
});
