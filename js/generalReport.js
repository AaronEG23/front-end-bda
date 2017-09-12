var AmountPerShop = [
	{
	'name'		    : "Tienda Heredia",
	'amount'        : "13 450 920"
	},
    {
    'name'          : "Tienda San Jose",
    'amount'        : "32 302 420"
    },
    {
    'name'          : "Tienda Alajuela",
    'amount'        : "23 456 360"
    }
];

var BillsPerProducts = [
    {
    'nameShop'      : "Tienda Heredia",
    'product'       : "Imperial",
    'units'         : "2",
    'price'         : "650"
    },
    {
    'nameShop'      : "Tienda Heredia",
    'product'       : "Pilsen",
    'units'         : "5",
    'price'         : "650"
    },
    {
    'nameShop'      : "Tienda Heredia",
    'product'       : "Agua ardiente",
    'units'         : "76",
    'price'         : "1500"
    },
    {
    'nameShop'      : "Tienda Heredia",
    'product'       : "Montano",
    'units'         : "12",
    'price'         : "1200"
    },
    {
    'nameShop'      : "Tienda San Jose",
    'product'       : "Imperial",
    'units'         : "2",
    'price'         : "650"
    },
    {
    'nameShop'      : "Tienda San Jose",
    'product'       : "Pilsen",
    'units'         : "5",
    'price'         : "650"
    },
    {
    'nameShop'      : "Tienda San Jose",
    'product'       : "Agua ardiente",
    'units'         : "76",
    'price'         : "1500"
    },
    {
    'nameShop'      : "Tienda San Jose",
    'product'       : "Montano",
    'units'         : "12",
    'price'         : "1200"
    },
    {
    'nameShop'      : "Tienda Alajuela",
    'product'       : "Imperial",
    'units'         : "2",
    'price'         : "650"
    },
    {
    'nameShop'      : "Tienda Alajuela",
    'product'       : "Pilsen",
    'units'         : "5",
    'price'         : "650"
    },
    {
    'nameShop'      : "Tienda Alajuela",
    'product'       : "Agua ardiente",
    'units'         : "76",
    'price'         : "1500"
    },
    {
    'nameShop'      : "Tienda Alajuela",
    'product'       : "Montano",
    'units'         : "12",
    'price'         : "1200"
    }
];

var topClients = [
    {
    'name'          : "Andres",
    'lname'         : "Arias",
    'amount'        : "1 504 300"
    },
    {
    'name'          : "Edwin",
    'lname'         : "Vasquez",
    'amount'        : "1 454 600"
    },
    {
    'name'          : "Aaron",
    'lname'         : "Elizondo",
    'amount'        : "654 600"
    }

];
	
app.controller("generalReportCtlr", function($scope,  $uibModal, $location, InforUser) {

    $scope.AmountPerShop    = AmountPerShop;
    $scope.BillsPerProducts = BillsPerProducts;
    $scope.topClients       = topClients;
    $(function () {
	    $('#tAmountPerShop').DataTable({
	      'paging'      : false,
	      'lengthChange': false,
	      'searching'   : false,
	      'ordering'    : true,
	      'info'        : false,
	      'autoWidth'   : true
	    })
  	});

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
        $('#ttopClients').DataTable({
          'paging'      : false,
          'lengthChange': false,
          'searching'   : false,
          'ordering'    : true,
          'info'        : false,
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


