import React,{Component} from 'react'
import { Checkbox, TextArea, Table, Form, Modal, Divider, Icon, Extra, Container, Header, Grid, Content, Button,  Input, Menu, Segment, Card, Group, Item, Image, Description} from 'semantic-ui-react'


class kflist extends Component {
    render(){
        console.log("we are here:Klist")
        console.log(data)
        const {data,filtertext }= this.props;

        var dlist = []
        for (var i =0; i <data.length;i++)
        {
            var key= data[i]
            var res=filtertext.split(":")
            console.log(res)
            if (key[res[0]].includes(res[1])) {


                dlist.push(
                    <Table.Row>
                        <Table.Cell>{key.id}</Table.Cell>
                        <Table.Cell>{key.name}</Table.Cell>
                        <Table.Cell>{key.game}</Table.Cell>
                        <Table.Cell textAlign='left'>{key.action}</Table.Cell>
                        <Table.Cell>{key.time}</Table.Cell>
                    </Table.Row>
                )
            }
        }

        console.log(dlist)
        return (
            <div >
                <hr/>
                <p><b>Current Key</b>  -  {this.props.filtertext} </p>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine> ID</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Game Name</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                            <Table.HeaderCell>Last Active</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {dlist}
                    </Table.Body>
                </Table>
            </div>
        );

    }
}

export default kflist;
