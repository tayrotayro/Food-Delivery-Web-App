import React, { Component } from 'react';
import { Row, Col, Input, Icon } from 'antd';
import Spinner from '../../Spinner';
import './SearchWrapper.css';

class SearchWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: false,
            searchKeyWord: ""
        }
    }

    render() {
        return (
            <div className="search-wrapper">
                <h1>Search</h1>
                <Input
                    autoFocus
                    allowClear
                    size="large"
                    placeholder='Try "wings"'
                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    onChange={value => {
                        const searchKeyWord = value.target.value
                        if (searchKeyWord === null || searchKeyWord === "") {
                            this.setState({
                                isSearching: false,
                                searchKeyWord: value.target.value
                            })
                        } else {
                            this.setState({
                                isSearching: true,
                                searchKeyWord: value.target.value
                            })
                        }
                    }
                    }
                />
                {
                    this.state.searchKeyWord === ""
                    &&
                    <div className="search-suggestion">
                        <h2>Popular Search</h2>
                        <Row
                            gutter={{ xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }}
                        >
                            <Col
                                className="search-fast-food search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">FAST FOOD</div>
                            </Col>
                            <Col
                                className="search-american search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">AMERICAN</div>
                            </Col>
                            <Col
                                className="search-healthy search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">HEALTHY</div>
                            </Col>
                            <Col
                                className="search-pizza search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">PIZZA</div>
                            </Col>
                            <Col
                                className="search-wings search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">WINGS</div>
                            </Col>
                            <Col
                                className="search-sandwiches search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">SANDWICHES</div>
                            </Col>
                        </Row>
                        <br />
                        <h2>More...</h2>
                        <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }}>
                            <Col
                                className="search-asian search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">Asian</div>
                            </Col>
                            <Col
                                className="search-bnb search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">Breakfast<br />& Brunch</div>
                            </Col>
                            <Col
                                className="search-bbq search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">BBQ</div>
                            </Col>
                            <Col
                                className="search-burgers search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">Burgers</div>
                            </Col>
                            <Col
                                className="search-cajun search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">Cajun</div>
                            </Col>
                            <Col
                                className="search-comfort search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">Comfort Food</div>
                            </Col>
                            <Col
                                className="search-japanese search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">Japanese</div>
                            </Col>
                            <Col
                                className="search-mediterranean search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">Mediterranean</div>
                            </Col>
                            <Col
                                className="search-mexican search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">Mexican</div>
                            </Col>
                            <Col
                                className="search-salads search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">Salads</div>
                            </Col>
                            <Col
                                className="search-southern search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">Southern</div>
                            </Col>
                            <Col
                                className="search-thai search-box-option"
                                xs={12} sm={12} md={8} lg={8} xl={6}
                            >
                                <div className="search-box-option-text">Thai</div>
                            </Col>
                        </Row>
                    </div>
                }
                {
                    this.state.isSearching
                    &&
                    <Spinner />
                }
            </div>
        )
    }
}

export default SearchWrapper;