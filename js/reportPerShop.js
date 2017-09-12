
var BillsPerProducts = [
    {
    'product'       : "Imperial",
    'units'         : "2",
    'price'         : "650"
    },
    {
    'product'       : "Pilsen",
    'units'         : "5",
    'price'         : "650"
    },
    {
    'product'       : "Agua ardiente",
    'units'         : "76",
    'price'         : "1500"
    },
    {
    'product'       : "Montano",
    'units'         : "12",
    'price'         : "1200"
    }
];

var dataTableClient = [
    {
    'name'      : "Aaron",
    'lname'     : "Elizondo",
    'phone'     : "88888888",
    'email'     : "email@email.com",
    'nbills'    : "10",
    'amount'    : "10000000"
    },
    {
    'name'      : "Edwin",
    'lname'     : "Vasquez",
    'phone'     : "88888888",
    'email'     : "email@email.com",
    'nbills'    : "7",
    'amount'    : "10000000"
    },
    {
    'name'      : "Andres",
    'lname'     : "Arias",
    'phone'     : "88888888",
    'email'     : "email@email.com",
    'nbills'    : "3",
    'amount'    : "10000000"
    }
];

app.controller("reportPerShopCtlr", function($scope,  $uibModal, $location, InforUser) {

    $scope.BillsPerProducts = BillsPerProducts;
    $scope.orderByClient = dataTableClient;
    $scope.s = {
        'nameShop':'Alajuela',
        'amountShop':'2 420 102'
    }
    for (var i = 0; i < $scope.orderByClient.length; i++) {
        $scope.orderByClient[i].prom = Math.round($scope.orderByClient[i].amount/$scope.orderByClient[i].nbills);
    }
    $(function () {
        $('#tBillsPerProducts').DataTable({
          'paging'      : true,
          'lengthChange': true,
          'searching'   : true,
          'ordering'    : true,
          'info'        : true,
          'autoWidth'   : true
        })
    });

    $(function () {
        $('#torderByClient').DataTable({
          'paging'      : true,
          'lengthChange': true,
          'searching'   : true,
          'ordering'    : true,
          'info'        : true,
          'autoWidth'   : true
        })
    });

    $('#date-btn-1').daterangepicker({
        ranges   : {
            'Today'       : [moment(), moment()],
            'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month'  : [moment().startOf('month'), moment().endOf('month')],
            'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate  : moment()
    });
    
    $('#date-btn-2').daterangepicker({
        ranges   : {
            'Today'       : [moment(), moment()],
            'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month'  : [moment().startOf('month'), moment().endOf('month')],
            'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate  : moment()
    });    
	
});


