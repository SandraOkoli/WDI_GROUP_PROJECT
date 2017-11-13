angular
  .module('outApp')
  .config(Filestack);

Filestack.$inject = ['filepickerProvider'];

function Filestack(filepickerProvider){
  filepickerProvider.setKey('ATzc1L3uGRoiaHn80b37Qz');
}
